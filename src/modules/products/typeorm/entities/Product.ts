import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
// Uma classe se tornar entidade para o typeorm tem que usar o decoretor @Entity('nameTable')
// Nome da tabela em que essa entidade vai fazer o mapeamento
class Product {
  // atributos
  // falar pro typeorm qual a configuração de cada atributo desse ( coluna que será mapeado pro DATABASE )
  @PrimaryGeneratedColumn('uuid') // falar pro typeorm qual config de cada atributo/coluna que vai ser mapeado com DB
  id: string; //atributos

  @Column() // não precisa explicitar. Pois, esse tipo já é padrão
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
