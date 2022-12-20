module.exports = (sequelize, DataTypes) => {
    const tickets = sequelize.define("tickets", {
      ticketcode: {
        type: DataTypes.STRING
      },
      TicketType: {
        type: DataTypes.STRING
      },
      Datecreated: {
        type: DataTypes.DATE
      },
      status: {
        type: DataTypes.STRING
      },
      dateupdated: {
        type: DataTypes.DATE
      },
      ticket_id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
    }, {
      timestamps: false
    });
    return tickets;
  };