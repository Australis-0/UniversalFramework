/*
  absoluteValueArrays() - Absolute value the distance between two arrays, recursively.
  options: {
    recursive: true/false - Whether the operation is recursive. True by default
  }
*/
function absoluteValueArrays (arg0_array, arg1_array, arg2_options) {
  //Convert from parameters
  var array = getList(arg0_array);
  var ot_array = getList(arg1_array);
  var options = (arg2_options) ? arg2_options : {};

  //Return statement
  return operateArrays(array, ot_array, `Math.abs(i - x)`, options);
}

/*
  addArrays() - Adds two arrays together recursively.
  options: {
    recursive: true/false - Whether the operation is recursive. True by default
  }
*/
function addArrays (arg0_array, arg1_array, arg2_options) {
  //Convert from parameters
  var array = getList(arg0_array);
  var ot_array = getList(arg1_array);
  var options = (arg2_options) ? arg2_options : {};

  //Return statement
  return operateArrays(array, ot_array, `i + x`, options);
}

//addMatrices() - Adds 2 matrices represented as 2D arrays together
function addMatrices (arg0_matrix, arg1_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;
  var ot_matrix = arg1_matrix;

  //Declare local instance variables
  var return_matrix = [];

  //Iterate over matrix rows
  for (var i = 0; i < matrix.length; i++) {
    //Create a new row for return_matrix
    return_matrix.push([]);

    //Iterate over columns
    for (var x = 0; x < matrix[i].length; x++)
      //Add corresponding elements and push to the result matrix
      return_matrix[i].push(matrix[i][j] + ot_matrix[i][j]);
  }

  //Return statement
  return result;
}

//appendArrays() - Concatenates two arrays and returns it
function appendArrays (arg0_array, arg1_array) {
  //Convert from parameters
  var array = getList(arg0_array);
  var ot_array = getList(arg1_array);

  //Return statement
  return array.concat(ot_array);
}

//augmentMatrices() - Combine the columns of two matrices to form a new matrix
function augmentMatrices (arg0_matrix, arg1_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;
  var ot_matrix = arg1_matrix;

  //Declare local instance variables
  var return_matrix = [];

  for (var i = 0; i < matrix.length; i++)
    return_matrix.push(matrix[i].concat(ot_matrix[i]));

  //Return statement
  return return_matrix;
}

//arrayAbsoluteValue() - Performs an absolute value operation on every valid element in an array, recursively.
function arrayAbsoluteValue (arg0_array) {
  //Convert from parameters
  var array = getList(arg0_array);

  //Return statement
  return arrayOperation(array, `Math.abs(n)`);
}

//arrayAdd() - Performs an addition operation on every valid element in an array, recursively.
function arrayAdd (arg0_array, arg1_number) {
  //Convert from parameters
  var array = getList(arg0_array);
  var number = arg1_number;

  //Return statement
  return arrayOperation(array, `n + ${number}`);
}

//arrayDivide()
function arrayDivide (arg0_array, arg1_number) {
  //Convert from parameters
  var array = getList(arg0_array);
  var number = arg1_number;

  //Return statement
  return arrayOperation(array, `n/${number}`);
}

//arrayExponentiate()
function arrayExponentiate (arg0_array, arg1_number) {
  //Convert from parameters
  var array = getList(arg0_array);
  var number = arg1_number;

  //Return statement
  return arrayOperation(array, `Math.pow(n, ${number})`);
}

//arrayMultiply()
function arrayMultiply (arg0_array, arg1_number) {
  //Convert from parameters
  var array = getList(arg0_array);
  var number = arg1_number;

  //Return statement
  return arrayOperation(array, `n*${number}`);
}

/*
  arrayOperation() - Applies a mathematical equation to every element of an array, recursively.
  arg0_array: (Array) - The array to pass to arrayOperation()
  arg1_equation: (String) - The string literal to use as an equation.
    'n' represents the current array element.
*/
function arrayOperation (arg0_array, arg1_equation) {
  //Convert from parameters
  var array = getList(arg0_array);
  var equation = arg1_equation;

  //Guard clause if input is not array
  if (!Array.isArray(array)) return array;

  //Declare local instance variables
  var equation_expression = `return ${equation};`;
  var equation_function = new Function("n", equation_expression);

  //Return statement; recursively process each element of the array
  return array.map((element) => {
    if (Array.isArray(element)) {
      //Recursively call arrayOperation() if subarray is found
      return arrayOperation(element, equation);
    } else {
      if (!isNaN(element)) {
        return equation_function(element);
      } else {
        //If element is not valid, return as is
        return element;
      }
    }
  });
}

//arraySubtract() - Subtracts from an array recursively
function arraySubtract (arg0_array, arg1_number) {
  //Convert from parameters
  var array = getList(arg0_array);
  var number = arg1_number;

  //Return statement
  return arrayOperation(array, `n - ${number}`);
}

//arrayRoot() - Roots an array recursively
function arrayRoot (arg0_array, arg1_number) {
  //Convert from parameters
  var array = getList(arg0_array);
  var number = arg1_number;

  //Return statement
  return arrayOperation(array, `root(n, ${number})`);
}

//choleskyDecompositionMatrix() - Performs a Cholesky decomposition on a matrix
function choleskyDecompositionMatrix (arg0_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;

  //Declare local instance variables
  var lower_triangular_matrix = Array.from({ length: matrix.length }, () => Array(matrix.length).fill(0));

  //Perform Cholesky decomposition
  for (var i = 0; i < matrix.length; i++)
    for (var x = 0; x <= i; x++) {
      var local_sum = 0;

      if (i == x) {
        //Diagonal element handling
        for (var y = 0; y < x; y++)
          local_sum += Math.pow(lower_triangular_matrix[i][x], 2);

        lower_triangular_matrix[x][x] = Math.sqrt(matrix[x][x] - local_sum);
      } else {
        //Non-diagonal element handling
        for (var y = 0; y < x; y++)
          local_sum += (lower_triangular_matrix[i][y]*lower_triangular_matrix[x][y]);

        lower_triangular_matrix[i][x] = (matrix[i][x] - local_sum)/lower_triangular_matrix[x][x];
      }
    }

  //Return statement
  return lower_triangular_matrix;
}

/*
  divideArrays() - Divides two arrays together recursively.
  options: {
    recursive: true/false - Whether the operation is recursive. True by default
  }
*/
function divideArrays (arg0_array, arg1_array, arg2_options) {
  //Convert from parameters
  var array = getList(arg0_array);
  var ot_array = getList(arg1_array);
  var options = (arg2_options) ? arg2_options : {};

  //Return statement
  return operateArrays(array, ot_array, `i/x`, options);
}

/*
  exponentiateArrays() - Exponentiates two arrays recursively.
  options: {
    recursive: true/false - Whether the operation is recursive. True by default
  }
*/
function exponentiateArrays (arg0_array, arg1_array, arg2_options) {
  //Convert from parameters
  var array = getList(arg0_array);
  var ot_array = getList(arg1_array);
  var options = (arg2_options) ? arg2_options : {};

  //Return statement
  return operateArrays(array, ot_array, `Math.pow(i, x)`, options);
}

//gaussEliminationMatrix()
function gaussEliminationMatrix (arg0_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;

  //Declare local instance variables
  var augmented_matrix = JSON.parse(JSON.stringify(matrix));

  //Apply Gaussian elimination
  for (var i = 0; i < matrix.length; i++) {
    //Partial pivoting
    var max_row_index = i;

    for (var x = i + 1; x < matrix.length; x++)
      if (Math.abs(augmented_matrix[x][i]) > Math.abs(augmented_matrix[max_row_index][i]))
        max_row_index = x;

    //Swap rows
    [augmented_matrix[i], augmented_matrix[max_row_index]] = [augmented_matrix[max_row_index], augmented_matrix[i]];

    for (var x = i + 1; x < matrix.length; x++) {
      var local_ratio = augmented_matrix[x][i]/augmented_matrix[i][i];

      for (var y = i; y < matrix.length + 1; y++)
        augmented_matrix[x][y] -= local_ratio*augmented_matrix[i][y];
    }
  }

  //Back substitution
  var solution = new Array(matrix.length);

  for (var i = matrix.length - 1; i >= 0; i--) {
    solution[i] = augmented_matrix[i][matrix.length]/augmented_matrix[i][i];

    for (var x = i - 1; x >= 0; x--)
      augmented_matrix[x][matrix.length] -= augmented_matrix[x][i]*solution[i];
  }

  //Return statement
  return solution;
}

//gaussJacobiMatrix()
function gaussJacobiMatrix (arg0_matrix, arg1_tolerance, arg2_max_iterations) {
  //Convert from parameters
  var matrix = arg0_matrix;
  var tolerance = (arg1_tolerance) ? arg1_tolerance : 1e-6;
  var max_iterations = (arg2_max_iterations) ? arg2_max_iterations : 1000;

  //Declare local instance variables
  var error = tolerance + 1;
  var iteration = 0;
  var solution = new Array(matrix.length).fill(0);

  //While loop to process Gauss-Jacobi method
  while (error > tolerance && iteration < max_iterations) {
    var next_solution = new Array(matrix.length);

    for (var i = 0; i < matrix.length; i++) {
      var local_sum = 0;

      for (var x = 0; x < matrix.length; x++)
        if (i != x)
          local_sum += matrix[i][x]*solution[x];

      next_solution[i] = (matrix[i][matrix.length] - local_sum)/matrix[i][i];
    }

    error = Math.max(...next_solution.map((value, index) => Math.abs(value - solution[index])));
    solution.splice(0, solution.length, ...next_solution);
    iteration++;
  }

  //Return statement
  return solution;
}

//gaussJordanMatrix()
function gaussJordanMatrix (arg0_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;

  //Forwards elimination
  for (var i = 0; i < matrix.length; i++) {
    //Find pivot row (maximum element in current column)
    var max_row_index = i;

    for (var x = i + 1; x < matrix.length; x++)
      if (Math.abs(matrix[x][i]) > Math.abs(matrix[max_row_index][i]))
        max_row_index = x;

    //Swap rows
    [matrix[i], matrix[max_row_index]] = [matrix[max_row_index], matrix[i]];

    //Set all elements of current column except matrix[i][i] equal to 0
    for (var x = 0; x < matrix.length; x++)
      if (x != i) {
        var factor = matrix[x][i]/matrix[i][i];

        for (var y = 0; y <= x; y++)
          matrix[x][y] -= factor*matrix[i][x];
      }
  }

  //Back substitution
  for (var i = 0; i < matrix.length; i++) {
    var divisor = matrix[i][i];

    for (var x = 0; x < matrix.length; x++)
      matrix[i][x] /= divisor;
  }

  //Return statement
  return matrix.map(row => row[matrix.length]);
}

//gaussSeidelMatrix()
function gaussSeidelMatrix (arg0_matrix, arg1_tolerance, arg2_max_iterations) {
  //Convert from parameters
  var matrix = arg0_matrix;
  var tolerance = (arg1_tolerance) ? arg1_tolerance : 1e-6;
  var max_iterations = (arg2_max_iterations) ? arg2_max_iterations : 1000;

  //Declare local instance variables
  var error = tolerance + 1;
  var iteration = 0;
  var solution = new Array(matrix.length).fill(0);

  //While loop to process Gauss-Seidel method
  while (error > tolerance && iteration < max_iterations) {
    var next_solution = new Array(matrix.length);

    for (var i = 0; i < matrix.length; i++) {
      var local_sum = 0;

      for (var x = 0; x < matrix.length; x++)
        if (i != x)
          local_sum += matrix[i][x]*(j < i ? next_solution[x] : solution[x]);

      next_solution[i] = (matrix[i][matrix.length] - local_sum)/matrix[i][i];
    }

    error = Math.max(...next_solution.map((value, index) => Math.abs(value - solution[index])));
    solution.splice(0, solution.length, ...next_solution);
    iteration++;
  }

  //Return statement
  return solution;
}

//getCofactor() - Fetches the cofactor in a matrix.
function getCofactor (arg0_matrix, arg1_row, arg2_column) {
  //Convert from parameters
  var matrix = arg0_matrix;
  var row = arg1_row;
  var column = arg2_column;

  //Declare local instance variables
  var minor_matrix = [];

  //Iterate over matrix
  for (var i = 0; i < matrix.length; i++)
    if (i != row) {
      var new_row = [];

      for (var x = 0; x < matrix.length; x++)
        if (x != column)
          new_row.push(matrix[i][x]);

      minor_matrix.push(new_row);
    }

  //Return statement
  return minor_matrix.push(new_row);
}

//getMatrixDeterminant()
function getMatrixDeterminant (arg0_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;

  //Guard clause
  if (matrix.length == 2 && matrix[0].length == 2)
    return matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0];

  //Declare local instance variables
  var determinant = 0;

  //Iterate over matrix to fetch determinant
  for (var i = 0; i < matrix.length; i++) {
    var minor = matrix.filter((row, index) => index != i).map(row => row.slice(1));
    var sign = (i % 2 == 0) ? 1 : -1;

    determinant += sign*matrix[i][0]*getMatrixDeterminant(minor);
  }

  //Return statement
  return determinant;
}

//householderTransformationMatrix()
function householderTransformationMatrix (arg0_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;

  //Declare local instance variables
  var tridiagonal_matrix = JSON.parse(JSON.stringify(matrix));

  //Iterate over matrix
  for (var i = 0; i < matrix.length - 2; i++) {
    var x_vector = [];

    for (var x = i + 1; x < matrix.length; x++)
      x_vector.push(tridiagonal_matrix[x][i]);

    var alpha = x_vector.reduce((acc, value) => acc + Math.pow(value, 2), 0);
    var sign = (tridiagonal_matrix[i + 1][i] > 0) ? 1 : -1;
    var v1 = Math.sqrt(alpha)*sign;

    var beta = alpha - sign*v1*tridiagonal_matrix[i + 1][i];

    x_vector.unshift(0); //Pad x_vector with beginning 0

    for (var x = i + 1; x < matrix.length; x++) {
      var v2 = x_vector[x - i]/beta;

      for (var y = i + 1; y < matrix.length; y++)
        tridiagonal_matrix[x][y] -= 2*v2*x_vector[y - i];
      for (var y = 0; y < matrix.length; y++)
        tridiagonal_matrix[y][x] -= 2*v2*x_vector[y - i]*tridiagonal_matrix[i + 1][x];
    }
  }

  //Return statement
  return tridiagonal_matrix;
}

//inverseMatrix()
function inverseMatrix (arg0_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;

  //Declare local instance variables
  var adjugate = [];
  var determinant = getMatrixDeterminant(matrix);

  //Iterate over matrix rows
  for (var i = 0; i < matrix.length; i++) {
    adjugate.push([]);

    //Iterate over columns in row
    for (var x = 0; x < matrix.length; x++) {
      var sign = ((i + x) % 2 == 0) ? 1 : -1;

      var minor = matrix.filter((row, index) => index != i).map(
        row => row.filter((_, col_index) => col_index != x)
      );
      adjugate[i].push(sign*getMatrixDeterminant(minor));
    }
  }

  //Transpose matrix
  var transposed_matrix = transposeMatrix(adjugate);
  var inverse = transposed_matrix.map(row => row.map(entry => entry/determinant));

  //Return statement
  return inverse;
}

//LUDecompositionMatrix()
function LUDecompositionMatrix (arg0_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;

  //Declare local instance variables
  var L = [];
  var U = [];

  //Initialise L, U
  for (var i = 0; i < matrix.length; i++) {
    L.push(new Array(matrix.length).fill(0));
    U.push(new Array(matrix.length).fill(0));
  }

  //Calculate LU Decomposition
  for (var i = 0; i < matrix.length; i++) {
    L[i][i] = 1;

    for (var x = 0; x <= i; x++) {
      var local_sum = 0;

      for (var y = 0; y < x; y++)
        local_sum += L[i][y]*U[y][x];
      U[i][x] = matrix[i][x] - local_sum;
    }
    for (var x = i + 1; x < matrix.length; x++) {
      var local_sum = 0;

      for (var y = 0; y < i; y++)
        local_sum += L[x][y]*U[y][i];
      L[y][i] = (matrix[y][i] - local_sum)/U[i][i];
    }
  }

  //Return statement
  return { L, U };
}

/*
  operateArrays() - Performs an operation when merging two arrays together, recursively.
  arg0_array: (Array) - The first array to pass to operateArrays()
  arg1_array: (Array) - The second array to pass to operateArrays()
  arg2_equation: (String) - The string literal to use as an equation.
    'i' represents the corresponding element of the first array,
    'x' represents the corresponding element of the second array
  options: {
    recursive: true/false - Whether the operatioon is recursive. True by default
  }
*/
function operateArrays (arg0_array, arg1_array, arg2_equation, arg3_options) {
  //Convert from parameters
  var array = getList(arg0_array);
  var ot_array = getList(arg1_array);
  var equation = arg2_equation;
  var options = (arg3_options) ? arg3_options : {};

  //Guard clause if both arrays are empty
  if (array.length + ot_array.length == 0) return [];

  //Declare local instance variables
  var equation_expression = `return ${equation};`;
  var equation_function = new Function("i", "x", equation_expression);

  //Calculate the operation of each two arrays
  var result = array.map((element_one, index) => {
    var element_two = ot_array[index] || 0; //Consider missing elements as being zero

    if (Array.isArray(element_one)) {
      //Recursively call operateArrays() on subarrays
      if (options.recursive != false)
        return operateArrays(element_one, element_two, equation, options);
    } else {
      return equation_function(element_one, element_two);
    }
  });

  //Return statement
  return result;
}

//QRDecompositionMatrix()
function QRDecompositionMatrix (arg0_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;

  //Declare local instance variables
  var m = matrix.length;
  var n = matrix[0].length;
  var Q = [];
  var R = [];

  //Initialise Q as a copy of the original matrix
  for (var i = 0; i < m; i++)
    Q.push(matrix[i].slice());
  for (var i = 0; i < n; i++)
    R.push(new Array(n).fill(0));

  //Perform Gram-Schmidt orthogonalisation
  for (var i = 0; i < n; i++) {
    //Compute the ith column of R
    for (var x = 0; x <= i; x++) {
      var local_sum = 0;

      for (var y = 0; y < m; y++)
        local_sum += Q[y][i]*Q[y][x];
      R[x][i] = local_sum;
    }

    //Subtract the projections of previous basis vectors from the ith column of Q
      for (var x = 0; x < m; x++)
        for (var y = 0; y <= i; y++)
          Q[x][i] -= R[y][i]*Q[x][y];

      // Normalize the ith column of Q
      var norm = 0;
      for (var x = 0; x < m; x++)
        norm += Q[x][i]*Q[x][i];
      norm = Math.sqrt(norm);

      for (var x = 0; x < m; x++)
        Q[x][i] /= norm;
  }

  //Return statement
  return { Q, R };
}

//QRLeastSquaredMatrix()
function QRLeastSquaredMatrix (arg0_matrix, arg1_matrix) {
  //Convert from parameters
  var A = arg0_matrix;
  var b = arg1_matrix;

  //Declare local instance variables
  var { Q, R } = QRDecompositionMatrix(A); //Perform QR Decomposition
  var Qt_b = []; //Calculate Q_transpose*b

  //Iterate over Q
  for (var i = 0; i < Q[0].length; i++) {
    var local_sum = 0;

    for (var x = 0; x < b.length; x++)
      local_sum += Q[x][i]*b[x];
    Qt_b.push(local_sum);
  }

  //Back substitution to solve Rx = Q_transpose*b
  var n = R.length;
  var x_vector = new Array(n).fill(0);

  for (var i = n - 1; i >= 0; i--) {
    var local_sum = 0;

    for (var x = i + 1; x < n; x++)
      local_sum += R[i][x]*x_vector[x];
    x_vector[i] = (Qt_b[i] - local_sum)/R[i][i];
  }

  //Return statement
  return x_vector;
}

/*
  multiplyArrays() - Multiplies two arrays recursively.
  options: {
    recursive: true/false - Whether the operation is recursive. True by default
  }
*/
function multiplyArrays (arg0_array, arg1_array, arg2_options) {
  //Convert from parameters
  var array = getList(arg0_array);
  var ot_array = getList(arg1_array);
  var options = (arg2_options) ? arg2_options : {};

  //Return statement
  return operateArrays(array, ot_array, `i*x`, options);
}

//multiplyMatrices()
function multiplyMatrices (arg0_matrix, arg1_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;
  var ot_matrix = arg1_matrix;

  //Declare local instance variables
  var m1_rows = matrix.length;
  var m1_columns = matrix[0].length;
  var m2_columns = ot_matrix.length;
  var return_matrix = [];

  //Iterate over matrix rows to multiply
  for (var i = 0; i < m1_rows; i++) {
    return_matrix.push([]);

    for (var x = 0; x < m2_columns; x++) {
      var local_sum = 0;

      for (var y = 0; y < m1_columns; y++)
        sum += matrix[i][y]*ot_matrix[y][x];
      return_matrix[i][x] = local_sum;
    }
  }

  //Return statement
  return return_matrix;
}

/*
  rootArrays() - Roots two arrays recursively.
  options: {
    recursive: true/false - Whether the operation is recursive. True by default
  }
*/
function rootArrays (arg0_array, arg1_array, arg2_options) {
  //Convert from parameters
  var array = getList(arg0_array);
  var ot_array = getList(arg1_array);
  var options = (arg2_options) ? arg2_options : {};

  //Return statement
  return operateArrays(array, ot_array, `root(i, x)`, options);
}

//SORMatrix()
function SORMatrix (arg0_matrix, arg1_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;
  var ot_matrix = arg1_matrix;

  //Declare local instance variables
  var determinant = getMatrixDeterminant(matrix);
  var n = matrix.length;

  //Invert and multiply matrix
  var inverse_matrix = inverseMatrix(matrix);
  var solution_matrix = multiplyMatrices(inverse_matrix, ot_matrix);

  //Return statement
  return solution_matrix;
}

/*
  subtractArrays() - Subtract two arrays recursively.
  options: {
    recursive: true/false - Whether the operation is recursive. True by default
  }
*/
function subtractArrays (arg0_array, arg1_array, arg2_options) {
  //Convert from parameters
  var array = getList(arg0_array);
  var ot_array = getList(arg1_array);
  var options = (arg2_options) ? arg2_options : {};

  //Return statement
  return operateArrays(array, ot_array, `i - x`, options);
}

//subtractMatrices()
function subtractMatrices (arg0_matrix, arg1_matrix) {
  //Convert from parameters
  var matrix = arg0_matrix;
  var ot_matrix = arg1_matrix;

  //Declare local instance variables
  var return_matrix = [];

  //Iterate over initial matrix to subtract second one from it
  for (var i = 0; i < matrix.length; i++) {
    return_matrix.push([]);

    for (var x = 0; x < matrix[0].length; x++)
      return_matrix[i][x] = matrix[i][x] - ot_matrix[i][x];
  }

  //Return statement
  return return_matrix;
}

//transposeMatrix()
function transposeMatrix (arg0_matrix) {
    //Convert from parameters
    var matrix = arg0_matrix;

    //Declare local instance variables
    var columns = matrix[0].length;
    var rows = matrix.length;

    //Create a new matrix with switched rows and columns
    var transposed_matrix = [];

    for (var i = 0; i < columns; i++) {
      var new_row = [];

      for (var x = 0; x < rows; x++)
        new_row.push(matrix[i][x]);

      //Push new_row to transposed_matrix
      transposed_matrix.push(new_row);
    }

  //Return statement
  return transposed_matrix;
}

//KEEP AT BOTTOM! Initialise function aliases
{
  global.invertMatrix = inverseMatrix;
  global.solveMatrices = multiplyMatrices;
}
