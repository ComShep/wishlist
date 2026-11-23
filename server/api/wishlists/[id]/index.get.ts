import { requeriOwnWishlist } from '~~/server/utils/wishlists'

export default defineEventHandler(async (event) => {
  const wishlist = await requeriOwnWishlist(event)

  return { id: wishlist.id, title: wishlist.title }
})
