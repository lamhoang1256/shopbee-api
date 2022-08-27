/** Xóa banner
 * @swagger
 * /product/{id}:
 *  delete:
 *      summary: Xóa banner
 *      tags: [Banner]
 *      security:
 *        - bearerAuth: []
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
