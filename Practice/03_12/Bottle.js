/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Bottle{
    constructor(
        name,
        fluid,
        volume,
        material,
        isEmpty
    )

    {
        this.name = name,
        this.fluid = fluid,
        this.volume = volume,
        this.material = material,
        this.isEmpty = isEmpty
    };

    
        FilledOrNot(filled) {
            this.isEmpty = filled
        };

}


export default Bottle;
