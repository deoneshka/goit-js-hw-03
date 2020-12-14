// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы
// для работы с балансом и историей транзакций.

let id = 0;

const getId = () => {
  return String(id++).padStart(3, '0');
};

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: getId(),
      amount,
      type,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if (amount === NaN || amount < 0) {
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount === NaN || amount < 0) {
      return;
    }

    if (amount > this.balance) {
      console.log('Снятие суммы невозможно, недостаточно средств');
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }

    return null;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }

    return total; 
  },
};

console.log(account.getBalance());

account.deposit(100);
account.deposit(300);
console.log(account.getBalance());

account.withdraw(500);
console.log(account.getBalance());

account.withdraw(100);
account.withdraw(50);

console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.transactions);

console.log(account.getTransactionDetails('002'));