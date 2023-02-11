type ImageItem = {
    id: number;
    title: string;
    imageUrl: string;
    type: 'imageItem';
  };
  
  type QuoteItem = {
    id: number;
    quote: string;
    type: 'quoteItem';
  };
  
  export type ItemEquality = ImageItem | QuoteItem;
  
  type ComponentProps = {
    items: ItemEquality[];
  }
  
  export default function EqualityNarrowingComponent({
    items,
  }: ComponentProps) {
    return (
      <ul>
        {items.map((item) => {
          
          if (item.type === "imageItem")
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
  