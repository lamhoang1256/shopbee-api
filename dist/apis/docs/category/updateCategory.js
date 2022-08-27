"use strict";
/** Cập nhật category
 * @swagger
 * /category/{id}:
 *  put:
 *      summary: Cập nhật category
 *      tags: [Category]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Product ID
 *      requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                type: object
 *                required:
 *                  - name
 *                  - slug
 *                  - image
 *                properties:
 *                   name:
 *                     type: string
 *                     example: Thời trang nữ
 *                   slug:
 *                     type: string
 *                     example: thoi-trang-nữ
 *                   image:
 *                     type: string
 *                     example: https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn
 *      responses:
 *          200:
 *              description: Success
 */
