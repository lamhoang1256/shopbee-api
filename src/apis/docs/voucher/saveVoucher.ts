/** Lưu voucher vào ví
 * @swagger
 * /order/save:
 *  post:
 *      summary: Lưu voucher vào ví
 *      tags: [Voucher]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: query
 *          name: code
 *          schema:
 *           type: string
 *      responses:
 *          200:
 *              description: Success
 */
