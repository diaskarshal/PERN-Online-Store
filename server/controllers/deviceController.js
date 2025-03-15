const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo, Brand } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;

      const fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        info,
        img: fileName,
      });

      if (info) {
        const parsedInfo = JSON.parse(info);
        parsedInfo.forEach((i) => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      let { brandId, typeId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 12;

      const offset = page * limit - limit;
      const whereClause = {};

      if (brandId) whereClause.brandId = brandId;
      if (typeId) whereClause.typeId = typeId;

      const devices = await Device.findAndCountAll({
        where: whereClause,
        limit,
        offset,
        include: [Brand],
      });

      return res.json(devices);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [
        { model: DeviceInfo, as: "info" },
        Brand,
      ],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();
