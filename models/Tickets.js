module.exports = (sequelize, DataTypes) => {
    const tickets = sequelize.define("tickets", {
      TicketStatus: {
        type: DataTypes.STRING
      },
      TicketCode: {
        type: DataTypes.STRING
      },
      CodeURL: {
        type: DataTypes.STRING
      },
      TicketCost: {
        type: DataTypes.NUMBER
      },
      EventID: {
        type: DataTypes.NUMBER
      },
      ClientPhone: {
        type: DataTypes.NUMBER
      },
      DatePurchased: {
        type: DataTypes.DATE
      },
      TicketClass: {
        type: DataTypes.NUMBER
      },
      TicketID: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
    }, {
      timestamps: false
    });
    return tickets;
  };