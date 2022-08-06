import sanityClient from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url";
export const client=sanityClient({
    projectId:"hsceiwx3",
    dataset:"production",
    apiVersion:'2022-08-01',
    useCdn:true,
    token:"skAqof9qUWeKG0nzWtdleaL9BCCAPijjraWkDJOjHy3y87grF5tG5GXK2pmxGd7V5DcFXbPpfFfRh7BJKtR3tx2f65k6vH4BsYettAmYV4nNsY8zBlso176YKXnSc4ba4iry0ISwbi2NqUcxDNuN0eF94FLiQigVttmf1YPw6sbr5pfaPDZG"
})

const builder=ImageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source)