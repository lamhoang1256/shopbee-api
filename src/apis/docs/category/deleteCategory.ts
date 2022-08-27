/** Xóa category
 * @swagger
 * /category/{id}:
 *  delete:
 *      summary: Xóa category
 *      tags: [Category]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Category ID
 *      responses:
 *          200:
 *              description: Success
 */
