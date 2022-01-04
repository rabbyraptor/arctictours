interface CtaButton {
    link: string;
    text: string;
}

interface HeroImage {
    image: string;
    text?: string;
    cta?: CtaButton;
}

interface TourInfo {
    title: string;
    text: string;
}

interface TourImageGrid {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
}

interface InfoBoxText {
    includedTitle: string;
    included: string[];
    notIncludedTitle: string;
    notIncluded: string[];
}

interface InfoBoxPrice {
    title: string;
    value: number;
    unit: string;
}

interface InfoBox {
    image: string;
    title: string;
    text: InfoBoxText;
    price: InfoBoxPrice;
    cta: CtaButton;
}

interface TourDetails {
    hero: HeroImage | undefined;
    name: string | undefined;
    tourInfo: TourInfo | undefined;
    tourImages: TourImageGrid;
    infoBox: InfoBox;
}
