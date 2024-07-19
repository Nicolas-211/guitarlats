export type Guitar = {
    id: number
    name: string
    image: string
    description: string
<<<<<<< HEAD
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}

// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }
// export type CartItem = Omit<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }

=======
    price: number  
}

export type CartItem =  Guitar & {
    
    quantity : number
}

>>>>>>> fa5f86207230214e640465f56b2354b43f00d947
