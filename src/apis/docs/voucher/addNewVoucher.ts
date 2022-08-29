/** Thêm voucher mới
 * @swagger
 * /voucher:
 *  post:
 *      summary: Thêm voucher mới
 *      tags: [Voucher]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                type: object
 *                required:
 *                  - code
 *                  - value
 *                  - title
 *                properties:
 *                   code:
 *                     type: string
 *                     example: GIAMGIA99K
 *                   value:
 *                     type: number
 *                     example: 99000
 *                   title:
 *                     type: string
 *                     example: Mã giảm giá khách hàng mới
 *                   expirationDate:
 *                     type: number
 *                     example: 1761741531411
 *                   usersUsed:
 *                     type: array
 *                     example: []
 *                   usersSave:
 *                     type: array
 *                     example: []
 *                   expired:
 *                     type: boolean
 *                     example: false
 *      responses:
 *          200:
 *              description: Success
 */
