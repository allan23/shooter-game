import Handler from "../helpers/handler";
import Enemy from "../components/enemy";
import Player from "../components/player";

export default class Level2 {
    constructor(handler: Handler){
        handler.add(new Player(20, 20, 20, 20))
        let enemyX = 100;
        let enemyY = 20;
        let enemyCount = 0;
        setInterval(()=>{
            if (enemyCount > 10) return;
            let enemy = new Enemy(20,20,enemyX,enemyY);
            enemy.color = '#fff';
            handler.add(enemy);
            enemyCount++;
            if (enemyX > 620){
                enemyX-=40;
            }else{
                enemyX+=40;
            }
        },1000);
    }
}
