
class FriendAge {

    constructor(name){
        this.name = name;
        this.friendAge= [];
    }
    age(year) {
        let date =new Date();
        let getCurrentYear = date.getFullYear();
        for(let i = 0 ; i < year.length ; i++) {

            let element = year[i];
            let fAge = getCurrentYear - element;
            this.friendAge.push(fAge);

        }
    }
    showFriendAge() {
        return this.friendAge;
    }
}
 let friendYears = [1994,1999,2010,1990,1992];
 let friendObj = new FriendAge("friends age calculate");
     friendObj.age(friendYears);
  let friendsCurrentAge = friendObj.showFriendAge();

  console.log(friendsCurrentAge);

