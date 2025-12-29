const Sequelize = require('sequelize')

class Comment extends Sequelize.Model {
    //테이블을 설정함 (create table)
    static initate(sequelize) {
        //안에 있는 값에 대한 컬럼의 설정
        //id를 기본 키로 알아서 연결함
        Comment.init({
            comment: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
        }, 
        //테이블 자체에 대한 설정
        {
            sequelize,
            timestamps: false,
            modelName: 'Comment',
            tableName: 'comments',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
    //다른 모델의 관계 (외래키 연결)
    static associate(db) {
        db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' })
    }
}

module.exports = Comment