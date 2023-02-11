type ImageItem = {
  id: number;
  title: string;
  imageUrl: string;
};

type QuoteItem = {
  id: number;
  quote: string;
};

export type Item = ImageItem | QuoteItem;

type ComponentProps = {
  items: Item[];
}

export default function InOperatorNarrowingComponent({
  items,
}: ComponentProps) {
  return (
    <ul>
      {items.map((item) => {

        if ("title" in item)
          return (
            <li key={item.id}>
              {item.title && <p>{item.title}</p>}
              {item.imageUrl && (
                <img
                  style={{ maxWidth: "15rem" }}
                  src={item.imageUrl}
                  alt={item.title}
                />
              )}
            </li>
          );

        return (
          <li key={item.id}>
            {item.quote && <p style={{ fontStyle: "italic" }}>{item.quote}</p>}
          </li>
        );
      })}
    </ul>
  );
}
