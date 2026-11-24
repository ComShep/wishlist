export default defineEventHandler(async (event) => {
  const wishlist = await requeriOwnWishlist(event)
  const gift = await readValidatedBody(event, giftShema.parse)

  await db.insert(tables.gifts).values({
    ...gift,
    wishlistId: wishlist.id,
  })
})
