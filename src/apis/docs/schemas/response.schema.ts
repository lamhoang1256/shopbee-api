/**
 * @swagger
 * components:
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
 *  schemas:
 *      ApiResponse:
 *          type: object
 *          properties:
 *              status:
 *                  type: number
 *              success:
 *                  type: boolean
 *              message:
 *                  type: string
 *              data:
 *                  type: array
 *
 */
