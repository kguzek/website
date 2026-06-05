export type SchemaOrgDefinition = Record<
  string,
  string | string[] | Record<string, string> | Record<string, string>[]
>;

export function SchemaOrgScript({ schema }: { schema?: SchemaOrgDefinition }) {
  if (schema == null) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
