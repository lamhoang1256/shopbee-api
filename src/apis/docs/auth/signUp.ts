/** Đăng kí tài khoản
 * @swagger
 * /auth/sign-up:
 *  post:
 *      summary: Đăng kí tài khoản
 *      tags: [User]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              type: string
 *                          password:
 *                              type: string
 *                          email:
 *                              type: string
 *      responses:
 *          200:
 *              description: Trả về một message đăng kí thành công
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/response/message'
 *          400:
 *              description: Bad Request - Thiếu các tham số đầu vào bắt buộc, hoặc dữ liệu không đúng với ràng buộc
 *          500:
 *              description: Lỗi thực thi request trên server
 */
