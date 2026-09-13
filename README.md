# 前沿试验关口决策服务

        用于记录探索项目的试验轮次和关口决定。基础服务只暴露存活状态与数据库迁移设施，业务判断将通过 HTTP 模块接入。

        ## 本地约定

        数据库默认写入 `data/experiments.sqlite3`，可通过 `APP_DB_PATH` 改为当前工程内的其他文件。服务不需要远程数据库或缓存。

        ## 常用命令

        ```bash
        npm install
npm run migrate
npm test
npm start
        ```

        Docker 镜像在构建阶段执行自动化测试，运行时监听 `PORT` 指定的端口，未设置时使用 8080。
