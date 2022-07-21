interface IBannerComponent {
  bg_color: string;
  call_to_action: {
    href: string;
    title: string;
  };
  main_title: string;
  sub_title: string;
  text_color: string;
  banner_image: {
    url: string;
  };
  seo: {
    meta_description: string;
    meta_keywords: string;
    meta_title: string;
  };
}

interface IOpeningsComponent {
  main_title: string;
  openings: {
    image: {
      url: string;
    };
    title: string;
    url: string;
  }[];
}

interface IVisionComponent {
  main_title: string;
  sub_heading: string;
  description: string;
}
type AllComponentProps =
  | IBannerComponent
  | IOpeningsComponent
  | IVisionComponent;

interface IPageComponents {
  props: AllComponentProps;
  contentType: string;
}
