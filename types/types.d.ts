interface ICtaButton {
    linkDestination: string;
    text: string;
}

interface IHeroImage {
    image: string;
    text?: string;
    cta?: ICtaButton;
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
    image: any;
    title: string;
    text: InfoBoxText;
    price: InfoBoxPrice;
    cta: ICtaButton;
}

interface ContactCta {
    image: any;
    text: string;
    cta: ICtaButton;
}

interface TourDetails {
    heroImage: IHeroImage;
    name: string;
    tourInfo: TourInfo;
    tourImages: TourImageGrid;
    infoBox: InfoBox;
}
