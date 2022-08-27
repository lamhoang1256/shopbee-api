/** Cập nhật banner
 * @swagger
 * /banner:
 *  post:
 *      summary: Cập nhật banner
 *      tags: [Banner]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                type: object
 *                required:
 *                  - bannerUrl
 *                properties:
 *                   bannerUrl:
 *                     type: string
 *                     example: https://cf.shopee.vn/file/5b678401fea50c49d3c28ca099837630_xxhdpi
 *      responses:
 *          200:
 *              description: Success
 */
