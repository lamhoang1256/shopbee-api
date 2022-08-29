/** Cập nhật đơn hàng sang trạng thái hủy
 * @swagger
 * /order/{id}/canceled:
 *  put:
 *      summary: Cập nhật đơn hàng sang trạng thái hủy
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
