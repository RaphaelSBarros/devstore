import data from '../data.json'

export const GET = async () => {
    const featuredProduts = data.products.filter((product) => product.featured)

    return Response.json(featuredProduts)
}