"use strict";
/** Thêm category mới
 * @swagger
 * /category:
 *  post:
 *      summary: Thêm category mới
 *      tags: [Category]
 *      security:
 *        - bearerAuth: []
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
 *                     example: Thời trang nam
 *                   slug:
 *                     type: string
 *                     example: thoi-trang-nam
 *                   image:
 *                     type: string
 *                     example: https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn
 *      responses:
 *          200:
 *              description: Success
 */
