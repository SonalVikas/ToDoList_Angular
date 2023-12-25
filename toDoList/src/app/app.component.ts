import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList Management';
  toDoArray:any[]=[];
  addTask(item:string)
    {
      this.toDoArray.push({id:this.toDoArray.length,name:item});
     console.warn(this.toDoArray);
    }
    removeTask(id:number)
    {
      this.toDoArray=this.toDoArray.filter(item=>item.id!==id);
    }
}
