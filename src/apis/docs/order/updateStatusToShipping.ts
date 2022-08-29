/** Cập nhật đơn hàng sang trạng thái đang vận chuyển
 * @swagger
 * /order/{id}/shipping:
 *  put:
 *      summary: Cập nhật đơn hàng sang trạng thái đang vận chuyển
 *      tags: [Order]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Order ID
 *      responses:
 *          200:
 *              description: Success
 */
