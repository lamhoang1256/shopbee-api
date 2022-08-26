/**
 * @swagger
 * components:
 *  schemas:
 *    Shop:
 *      type: object
 *      required:
 *        - name
 *        - avatar
 *      properties:
 *        name:
 *          type: string
 *          description: Tên shop
 *        avatar:
 *          type: string
 *          description: Link ảnh đại diện
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
 *          description: Địa chỉ (= street + ward.name + district.name + city.name)
 */
