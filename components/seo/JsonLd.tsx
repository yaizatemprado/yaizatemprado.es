type Schema = Record<string, unknown>

/**
 * One structured-data block. Pages declare the schema that matches what they
 * actually are, instead of the whole site repeating the same Person card.
 */
export default function JsonLd({ data }: { data: Schema | Schema[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
