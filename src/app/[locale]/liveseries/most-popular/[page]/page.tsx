import type { Show as TvMazeShow } from "tvmaze-wrapper-ts";
import { getTranslations } from "next-intl/server";

import { ErrorComponent } from "@/components/error/component";
import { TvShowPreviewList } from "@/components/liveseries/tv-show-preview-list";
import { TVMAZE_SCRAPER_BASE_URL } from "@/lib/constants";
import { ErrorCode } from "@/lib/enums";
import { getTitle, isNumber } from "@/lib/util";

const MOST_POPULAR_REVALIDATE_SECONDS = 60 * 60 * 24;

interface MostPopularShowsResponse {
  meta: {
    page: number;
    start: number;
    end: number;
    totalShows: number;
    totalPages: number;
  };
  data: TvMazeShow[];
}

function getMostPopularShowsUrl(page: number) {
  return new URL(`/shows/most-popular/${page}.json`, TVMAZE_SCRAPER_BASE_URL).toString();
}

async function getMostPopularShows(page: number): Promise<MostPopularShowsResponse> {
  const response = await fetch(getMostPopularShowsUrl(page), {
    next: { revalidate: MOST_POPULAR_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(
      `TVmaze scraper returned ${response.status} for most popular page ${page}`,
    );
  }

  return (await response.json()) as MostPopularShowsResponse;
}

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: t("liveSeries.mostPopular.title"),
  };
}

export default async function MostPopular({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const t = await getTranslations();
  const { page: pageString } = await params;
  if (!isNumber(pageString)) {
    return <ErrorComponent errorCode={ErrorCode.NotFound} />;
  }

  const pageFrontend = +pageString;
  if (pageFrontend < 1) {
    return <ErrorComponent errorCode={ErrorCode.NotFound} />;
  }

  let results: TvMazeShow[] = [];
  let total = 0;
  try {
    const { data, meta } = await getMostPopularShows(pageFrontend);
    results = data;
    total = meta.totalShows;
  } catch (error) {
    console.error("Error fetching most popular shows:", error);
  }
  // if (result.ok && result.data.page !== +page) {
  //   redirect(`./${result.data.page}`);
  // }

  return (
    <>
      <h2 className="my-6 text-3xl font-bold">
        {getTitle(t("liveSeries.mostPopular.title"), t("liveSeries.title"))}
      </h2>
      <TvShowPreviewList tvShows={results} page={pageFrontend} total={total} />
    </>
  );
}
