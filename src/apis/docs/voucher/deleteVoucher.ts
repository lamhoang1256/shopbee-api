/** Xóa voucher
 * @swagger
 * /voucher/{id}:
 *  delete:
 *      summary: Xóa voucher
 *      tags: [Voucher]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Voucher ID
 *      responses:
 *          200:
 *              description: Success
 */
