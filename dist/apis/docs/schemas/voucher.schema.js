"use strict";
/**
 * @swagger
 * components:
 *  schemas:
 *    Voucher:
 *      type: object
 *      required:
 *        - code
 *        - value
 *        - title
 *      properties:
 *        code:
 *          type: string
 *          description: Mã code voucher
 *        value:
 *          type: number
 *          description: Giá trị voucher
 *        title:
 *          type: string
 *          description: Tên voucher
 *        expirationDate:
 *          type: number
 *          description: Hạn sử dụng của voucher
 *        usersUsed:
 *          type: array
 *          items:
 *             type: string
 *             description: Danh sách userId người dùng đã sử dụng voucher này
 */
