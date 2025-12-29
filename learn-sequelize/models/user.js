const Sequelize = require('sequelize')

class User extends Sequelize.Model {
    //테이블을 설정함 (create table)
    static initate(sequelize) {
        //안에 있는 값에 대한 컬럼의 설정
        //id를 기본 키로 알아서 연결함
        User.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
        }, 
        //테이블 자체에 대한 설정
        {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    //다른 모델의 관계
    static associate(db) {
        db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' })
    }
}

module.exports = User