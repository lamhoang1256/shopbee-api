/** Lấy tất cả nhận xét theo id sản phẩm
 * @swagger
 * /review/product/:id:
 *  get:
 *      summary: Lấy tất cả nhận xét theo id sản phẩm
 *      tags: [Review]
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Product ID
 *      responses:
 *          200:
 *              description: Success
 */
