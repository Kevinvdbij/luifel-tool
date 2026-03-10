import { getManufacturerById } from "./Maps";

const shopwareApiUrl = "https://www.kampeerhalroden.nl/";

export type ProductInfo = {
    name: string,
    ean: string,
    price: number,
    imageUrl: string,
    url: string,
    manufacturer: string,
}

/** Retrieve product info from Shopware with EAN number */
export default async function GetProductByEan(ean: string): Promise<ProductInfo> {
    // Define the request URL and options for the Shopware API
    const url = shopwareApiUrl + "store-api/product";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'sw-access-key': 'SWSCNGG4CDNHVVL4MJZ2YKDCMA',
            "sw-include-seo-urls":"true"
        },
        body: JSON.stringify({
            filter: [
                {
                    type: "contains",
                    field: "ean",
                    value: ean
                }
            ]
        })
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);

        if (data?.elements?.length > 0) {
            const product = data.elements[0];
            console.log(product.name)
            return {
                name: product.name,
                ean: ean,
                price: product.calculatedPrice.unitPrice,
                imageUrl: "https://www.kampeerhalroden.nl/" + product.cover.media.path,
                url: "https://www.kampeerhalroden.nl/" + product.seoUrls[0].seoPathInfo,
                manufacturer: getManufacturerById(product.manufacturerId),
            };
        } else throw new Error("Product not found");
    } catch (error) {
        console.warn(error);
        return {
            name: "Failed to retrieve product from Shopware...",
            ean: ean,
            price: -1,
            imageUrl: "",
            url: "",
            manufacturer: ""
        };
    }
}