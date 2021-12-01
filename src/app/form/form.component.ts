import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private _local: LocalDataService) {
    this.saveData();
    //this.updateData();
  }

  ngOnInit(): void {}

  saveData() {
    const id = Math.floor(Math.random() * 50);
    const articleObj = {
      id: id,
      title: 'Lorem ipsum',
      body: `
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et natus nesciunt esse culpa, voluptates veritatis ducimus ipsa quo unde voluptatibus totam aliquid! Officiis, iusto non. Accusamus iure nobis vero nemo cumque ab, sequi voluptatibus a sint tempore voluptas! Fuga quo obcaecati maxime praesentium quibusdam deserunt voluptatibus, alias quasi eaque iure corporis quaerat doloribus ipsam asperiores ea officiis veritatis non vel quidem! Tempora aperiam, ea placeat quasi obcaecati delectus perspiciatis veritatis minus recusandae beatae nihil distinctio consequuntur vel pariatur. Quaerat nobis tempora quo sint distinctio aspernatur id aliquam laudantium fugiat cum suscipit maxime adipisci dignissimos minus officia, dolores numquam esse, expedita sequi quasi. Recusandae architecto neque error non cupiditate excepturi omnis quis, nobis inventore odio quas veritatis nulla, facilis at mollitia, labore necessitatibus dolorem enim. Magni aspernatur necessitatibus architecto totam. Qui quae laborum sapiente perspiciatis molestias sunt, minus odit magni fugit dolorum recusandae officiis laboriosam quam nostrum porro inventore itaque in consequuntur harum iure, non ipsam. Iusto earum non praesentium. Repellat illum ipsa commodi harum? Ab necessitatibus porro repellendus dolor explicabo, dolore unde, adipisci similique cupiditate dolorem praesentium accusamus fugit molestias doloribus aperiam impedit labore? Exercitationem itaque obcaecati, saepe id amet error dignissimos ducimus rem laborum, blanditiis, voluptates expedita tempora omnis. Ducimus obcaecati quasi esse earum error alias in distinctio molestias deserunt dignissimos eum laudantium impedit ab perferendis quia velit corrupti, excepturi autem iure rerum expedita laboriosam minima. Possimus quae quam optio soluta eum reprehenderit vel. Nesciunt deserunt veniam deleniti, ab dolorum atque quas quo fuga ipsam eius a quasi delectus consequuntur eum magni unde architecto magnam sequi corrupti eaque laboriosam. Dolores perspiciatis, officiis maiores totam tempore labore nesciunt nemo eum corporis pariatur. Ab repellat corporis iusto dicta, maxime quia repudiandae a ratione incidunt dolorum nesciunt id consequuntur. Iure repudiandae animi soluta, excepturi aspernatur incidunt beatae impedit laborum vitae sapiente molestiae aliquam iste at quos. Est obcaecati voluptatum debitis rem quibusdam. Exercitationem aperiam debitis distinctio incidunt quasi voluptatibus sunt laboriosam quas asperiores cum soluta iure ex modi ducimus eveniet vitae possimus natus perferendis nulla illum, molestias officiis aliquam? Magni iure aperiam, animi, vero tenetur provident at, fuga error quam quos dolorum rem officiis labore iusto aut natus itaque optio alias blanditiis obcaecati accusamus delectus beatae illum? Voluptatibus, laudantium sequi. Quia atque eos asperiores necessitatibus reiciendis ipsum autem quae, animi, quisquam illo eligendi consequuntur hic deleniti. Sed vel eum reiciendis, libero, excepturi eaque, ipsam dolorem quos modi nihil id odit voluptates aut omnis. Earum tempore iusto, animi quas laboriosam illo ratione aut, illum veniam, quae harum quasi excepturi consequuntur similique aspernatur sapiente possimus dolorum! Consectetur quo minima illo repellat ipsum! Temporibus totam consequuntur fugiat, accusantium eum modi, accusamus ex ab velit et reprehenderit sapiente eaque mollitia molestias suscipit, voluptate perspiciatis vel facere numquam. Ad sequi, eveniet blanditiis soluta quibusdam sed velit illum pariatur quis odit distinctio, commodi reprehenderit, omnis eius officiis accusantium! At quidem tempore dolore ab impedit molestias libero ipsam assumenda. Tenetur necessitatibus aperiam debitis quos praesentium enim iure, voluptas ducimus eaque dolore suscipit doloremque, quaerat nam maxime ipsam harum earum!
      `,
      author: 'Tech world',
      date: new Date(),
      likes: 0,
    };
    this._local.saveArticle(articleObj).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  updateData() {
    const updatedObj = {
      id: 26,
      title: 'latest update',
      body: 'updated body',
    };
    this._local.updateData(updatedObj).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
