
class Node {
  constructor ({data, previous = null ,next = null}) {
    this.data = data
    this.next = next
    // NOTE: For Double Linked List
    if(previous){
      this.previous = previous
    }
  }
}

class LinkedList {
  constructor ({double=false}) {
    if(double){
      this.previous = null
    }
    this.next = null
    this.size = 0
    this.add = this.add.bind(this)
  }

  add (element) {
    const node = new Node({data:element})
    if (this.next == null) {
       this.next = node
     } else {
      let current = this.next
      console.log(current);
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }
}

function createRandomArray (params = {}) {
  let data = []
  const { sort = false, sortType = 'aesc', n = 10 } = params
  for (let i = 0; i < n; i++) {
    let lastValue=data[i - 1]
    let value = getValue({sort,sortType,value:lastValue})
    data.push(parseInt(value))
  }
  return data
}


function getValue({sort ,sortType, value : lastValue }) {
  let value = parseInt(Math.random() * 10000)
  if (sort) {
    if (sortType === 'aesc') { value = (!lastValue) ? value : (lastValue < value) ? value : (lastValue + Math.random() * 100) }
    if (sortType === 'desc') { value = (!lastValue) ? value : (lastValue > value) ? value : (lastValue - Math.random() * 100) }
  }
  return value
}

function createRandomSingleLinkedList(params={}) {
  let node = new Node(4)
  let list = new LinkedList()
  const { sort = false, sortType = 'aesc', n = 10 } = params
  for (let i = 0; i < n; i++) {
    let value=getValue({sort,sortType})
    list.add(parseInt(value))
  }

  return list
}

createRandomSingleLinkedList()
module.exports = {
  createRandomArray,
  createRandomSingleLinkedList
}
