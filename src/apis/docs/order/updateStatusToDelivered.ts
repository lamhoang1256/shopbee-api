/** Cập nhật đơn hàng sang trạng thái đã giao hàng
 * @swagger
 * /order/{id}/delivered:
 *  put:
 *      summary: Cập nhật đơn hàng sang trạng thái đã giao hàng
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
