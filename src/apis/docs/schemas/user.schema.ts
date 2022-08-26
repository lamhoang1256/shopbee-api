/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          description: Địa chỉ email
 *        password:
 *          type: string
 *          description: Mật khẩu
 *        fullname:
 *          type: string
 *          description: Họ và tên
 *        avatar:
 *          type: string
 *          description: Link ảnh đại diện
 *        phone:
 *          type: string
 *          description: Số điện thoại
 *        city:
 *          type: object
 *          properties:
 *            id:
 *              type: string
 *              description: Mã tỉnh/thành phố
 *            name:
 *              type: string
 *              description: Tên tỉnh/thành phố
 *          example:
 *            id: 46
 *            name: TP. Hồ Chí Minh
 *        district:
 *          type: object
 *          properties:
 *            id:
 *              type: string
 *              description: Mã quận/huyện
 *            name:
 *              type: string
 *              description: Tên quận/huyện
 *          example:
 *            id: 784
 *            name: Huyện Hóc Môn
 *        ward:
 *          type: object
 *          properties:
 *            id:
 *              type: string
 *              description: Mã phường/xã
 *            name:
 *              type: string
 *              description: Tên phường/xã
 *          example:
 *            id: 27568
 *            name: Xã Đông Thạnh
 *        street:
 *          type: string
 *          description: Địa chỉ nhà, khu phố
 *        address:
 *          type: string
 *          description: Địa chỉ
 *        isAdmin:
 *          type: boolean
 *          description: Quyền quản trị
 *          default: false
 */
