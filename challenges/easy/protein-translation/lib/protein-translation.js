/////////////////////////
// Protein Translation //
/////////////////////////

// Lets write a program that will translate RNA sequences into
// proteins. RNA can be broken into three nucleotide sequences
// called codons, and then translated to a polypeptide like so:

// RNA: "AUGUUUUCU" => translates to

// Codons: "AUG", "UUU", "UCU"
// => which become a polypeptide with the following sequence =>

// Protein: "Methionine", "Phenylalanine", "Serine"
// There are 64 codons which in turn correspond to 20 amino acids;
// however, all of the codon sequences and resulting amino acids are
// not important in this exercise.

// There are also four terminating codons (also known as 'STOP'
// codons); if any of these codons are encountered (by the ribosome),
// all translation ends and the protein is terminated. All subsequent
// codons after are ignored, like this:

// RNA: "AUGUUUUCUUAAAUG" =>

// Codons: "AUG", "UUU", "UCU", "UAA", "AUG" =>

// Protein: "Methionine", "Phenylalanine", "Serine"
// Note the stop codon terminates the translation and the final
// methionine is not translated into the protein sequence.--

// Below are the codons and resulting Amino Acids needed for
// the exercise.

function translate(codonString = '') {
  const TO_AMINO_ACID = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
  }

  let res = [];

  for (let idx = 0; idx < codonString.length; idx += 3) {
    let codon = codonString.slice(idx, idx + 3);
    
    console.log(codon);
    let acid = TO_AMINO_ACID[codon];

    if (!acid) throw new Error("Invalid codon");
    if (acid === 'STOP') return res;
    
    res.push(acid);
  }

  return res;
}

module.exports = translate;