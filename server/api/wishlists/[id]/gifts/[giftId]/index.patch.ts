import { and, eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const wishlist = await requeriOwnWishlist(event)
  const giftId = getIdParam(event, 'giftId')
  const gift = await readValidatedBody(event, giftShema.parse)

  const updated = await db
    .update(tables.gifts)
    .set(gift)
    .where(and(eq(tables.gifts.id, giftId), eq(tables.gifts.wishlistId, wishlist.id)))
    .returning({ id: tables.gifts.id })
    .get()

  if (!updated) {
    throw createError({ statusCode: 404, message: 'Подарок не найден' })
  }
})
