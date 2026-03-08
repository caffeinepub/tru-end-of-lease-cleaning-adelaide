import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
}

export function useSEO({
  title,
  description,
  ogImage,
  ogType = "website",
  keywords,
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (selector: string, attribute: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attribute.split("=")[0], attribute.split("=")[1]);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', "name=description", description);
    if (keywords) setMeta('meta[name="keywords"]', "name=keywords", keywords);
    setMeta('meta[property="og:title"]', "property=og:title", title);
    setMeta(
      'meta[property="og:description"]',
      "property=og:description",
      description,
    );
    setMeta('meta[property="og:type"]', "property=og:type", ogType);
    if (ogImage)
      setMeta('meta[property="og:image"]', "property=og:image", ogImage);
    setMeta('meta[name="twitter:title"]', "name=twitter:title", title);
    setMeta(
      'meta[name="twitter:description"]',
      "name=twitter:description",
      description,
    );
    if (ogImage)
      setMeta('meta[name="twitter:image"]', "name=twitter:image", ogImage);
  }, [title, description, ogImage, ogType, keywords]);
}
