import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "zy4r2tx7jy25",
  environment: "master",
  accessToken: "BqwCbw2qLKOXHQlrfUpqZMA9L-B_Ti0mxt8IDqsJRqw",
});

const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const id = item.sys.id;
        const title = item.fields.title;
        const url = item.fields.url;
        const img = item.fields.image?.fields?.file?.url;
        return { id, title, url, img };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};

export default useFetchProjects;
