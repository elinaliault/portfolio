import { lazy } from "react";

import Overview from "./Overview";
import TitleParagraph from "./TitleParagraph";
import ImageBlock from "./ImageBlock";
import ImageGrid from "./ImageGrid";
import VideoBlock from "./VideoBlock";

// Lazy load the heavy PDF flipbook component and its large worker dependencies
const PdfFlipbook = lazy(() => import("./pdfModule/PdfFlipbook"));

import ScrollIndicator from "./ScrollIndicator";
import ListBlock from "./List";


export const moduleRegistry = {
  overview: Overview,
  titleParagraph: TitleParagraph,
  image: ImageBlock,
  imageGrid: ImageGrid,
  video: VideoBlock,
  pdf: PdfFlipbook,
  scrollIndicator: ScrollIndicator,
  list: ListBlock,
};