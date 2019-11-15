namespace MathTutorXML
{
   partial class MathTutor
   {
      /// <summary>
      /// Required designer variable.
      /// </summary>
      private System.ComponentModel.IContainer components = null;

      /// <summary>
      /// Clean up any resources being used.
      /// </summary>
      /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
      protected override void Dispose(bool disposing)
      {
         if (disposing && (components != null))
         {
            components.Dispose();
         }
         base.Dispose(disposing);
      }

      #region Windows Form Designer generated code

      /// <summary>
      /// Required method for Designer support - do not modify
      /// the contents of this method with the code editor.
      /// </summary>
      private void InitializeComponent()
      {
         this.okButton = new System.Windows.Forms.Button();
         this.answerTextBox = new System.Windows.Forms.TextBox();
         this.grpOperation = new System.Windows.Forms.GroupBox();
         this.multiplicationRadioButton = new System.Windows.Forms.RadioButton();
         this.subtractionRadioButton = new System.Windows.Forms.RadioButton();
         this.additionRadioButton = new System.Windows.Forms.RadioButton();
         this.grpDifficulty = new System.Windows.Forms.GroupBox();
         this.levelThreeRadioButton = new System.Windows.Forms.RadioButton();
         this.levelTwoRadioButton = new System.Windows.Forms.RadioButton();
         this.levelOneRadioButton = new System.Windows.Forms.RadioButton();
         this.lblEquals = new System.Windows.Forms.Label();
         this.generateButton = new System.Windows.Forms.Button();
         this.questionLabel = new System.Windows.Forms.Label();
         this.grpOperation.SuspendLayout();
         this.grpDifficulty.SuspendLayout();
         this.SuspendLayout();
         // 
         // okButton
         // 
         this.okButton.Enabled = false;
         this.okButton.Location = new System.Drawing.Point(335, 14);
         this.okButton.Name = "okButton";
         this.okButton.Size = new System.Drawing.Size(103, 25);
         this.okButton.TabIndex = 45;
         this.okButton.Text = "OK";
         this.okButton.Click += new System.EventHandler(this.okButton_Click);
         // 
         // answerTextBox
         // 
         this.answerTextBox.Enabled = false;
         this.answerTextBox.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
         this.answerTextBox.Location = new System.Drawing.Point(206, 15);
         this.answerTextBox.Name = "answerTextBox";
         this.answerTextBox.Size = new System.Drawing.Size(111, 22);
         this.answerTextBox.TabIndex = 43;
         // 
         // grpOperation
         // 
         this.grpOperation.Controls.Add(this.multiplicationRadioButton);
         this.grpOperation.Controls.Add(this.subtractionRadioButton);
         this.grpOperation.Controls.Add(this.additionRadioButton);
         this.grpOperation.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
         this.grpOperation.Location = new System.Drawing.Point(10, 57);
         this.grpOperation.Margin = new System.Windows.Forms.Padding(3, 1, 3, 3);
         this.grpOperation.Name = "grpOperation";
         this.grpOperation.Size = new System.Drawing.Size(307, 53);
         this.grpOperation.TabIndex = 46;
         this.grpOperation.TabStop = false;
         this.grpOperation.Text = "Operation";
         // 
         // multiplicationRadioButton
         // 
         this.multiplicationRadioButton.AutoSize = true;
         this.multiplicationRadioButton.Location = new System.Drawing.Point(199, 22);
         this.multiplicationRadioButton.Name = "multiplicationRadioButton";
         this.multiplicationRadioButton.Size = new System.Drawing.Size(103, 20);
         this.multiplicationRadioButton.TabIndex = 2;
         this.multiplicationRadioButton.Text = "Multiplication";
         this.multiplicationRadioButton.CheckedChanged += new System.EventHandler(this.multiplicationRadioButton_CheckedChanged);
         // 
         // subtractionRadioButton
         // 
         this.subtractionRadioButton.AutoSize = true;
         this.subtractionRadioButton.Location = new System.Drawing.Point(103, 22);
         this.subtractionRadioButton.Name = "subtractionRadioButton";
         this.subtractionRadioButton.Size = new System.Drawing.Size(93, 20);
         this.subtractionRadioButton.TabIndex = 1;
         this.subtractionRadioButton.Text = "Subtraction";
         this.subtractionRadioButton.CheckedChanged += new System.EventHandler(this.subtractionRadioButton_CheckedChanged);
         // 
         // additionRadioButton
         // 
         this.additionRadioButton.AutoSize = true;
         this.additionRadioButton.Checked = true;
         this.additionRadioButton.Location = new System.Drawing.Point(7, 22);
         this.additionRadioButton.Name = "additionRadioButton";
         this.additionRadioButton.Size = new System.Drawing.Size(75, 20);
         this.additionRadioButton.TabIndex = 0;
         this.additionRadioButton.TabStop = true;
         this.additionRadioButton.Text = "Addition";
         this.additionRadioButton.CheckedChanged += new System.EventHandler(this.additionRadioButton_CheckedChanged);
         // 
         // grpDifficulty
         // 
         this.grpDifficulty.Controls.Add(this.levelThreeRadioButton);
         this.grpDifficulty.Controls.Add(this.levelTwoRadioButton);
         this.grpDifficulty.Controls.Add(this.levelOneRadioButton);
         this.grpDifficulty.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
         this.grpDifficulty.Location = new System.Drawing.Point(10, 117);
         this.grpDifficulty.Name = "grpDifficulty";
         this.grpDifficulty.Size = new System.Drawing.Size(307, 53);
         this.grpDifficulty.TabIndex = 47;
         this.grpDifficulty.TabStop = false;
         this.grpDifficulty.Text = "Difficulty";
         // 
         // levelThreeRadioButton
         // 
         this.levelThreeRadioButton.AutoSize = true;
         this.levelThreeRadioButton.Location = new System.Drawing.Point(199, 22);
         this.levelThreeRadioButton.Name = "levelThreeRadioButton";
         this.levelThreeRadioButton.Size = new System.Drawing.Size(69, 20);
         this.levelThreeRadioButton.TabIndex = 2;
         this.levelThreeRadioButton.Text = "Level 3";
         this.levelThreeRadioButton.CheckedChanged += new System.EventHandler(this.levelThreeRadioButton_CheckedChanged);
         // 
         // levelTwoRadioButton
         // 
         this.levelTwoRadioButton.AutoSize = true;
         this.levelTwoRadioButton.Location = new System.Drawing.Point(103, 22);
         this.levelTwoRadioButton.Name = "levelTwoRadioButton";
         this.levelTwoRadioButton.Size = new System.Drawing.Size(69, 20);
         this.levelTwoRadioButton.TabIndex = 1;
         this.levelTwoRadioButton.Text = "Level 2";
         this.levelTwoRadioButton.CheckedChanged += new System.EventHandler(this.levelTwoRadioButton_CheckedChanged);
         // 
         // levelOneRadioButton
         // 
         this.levelOneRadioButton.AutoSize = true;
         this.levelOneRadioButton.Checked = true;
         this.levelOneRadioButton.Location = new System.Drawing.Point(7, 22);
         this.levelOneRadioButton.Name = "levelOneRadioButton";
         this.levelOneRadioButton.Size = new System.Drawing.Size(69, 20);
         this.levelOneRadioButton.TabIndex = 0;
         this.levelOneRadioButton.TabStop = true;
         this.levelOneRadioButton.Text = "Level 1";
         this.levelOneRadioButton.CheckedChanged += new System.EventHandler(this.levelOneRadioButton_CheckedChanged);
         // 
         // lblEquals
         // 
         this.lblEquals.AutoSize = true;
         this.lblEquals.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
         this.lblEquals.Location = new System.Drawing.Point(186, 18);
         this.lblEquals.Name = "lblEquals";
         this.lblEquals.Size = new System.Drawing.Size(15, 16);
         this.lblEquals.TabIndex = 44;
         this.lblEquals.Text = "=";
         // 
         // generateButton
         // 
         this.generateButton.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
         this.generateButton.Location = new System.Drawing.Point(335, 57);
         this.generateButton.Name = "generateButton";
         this.generateButton.Size = new System.Drawing.Size(103, 113);
         this.generateButton.TabIndex = 48;
         this.generateButton.Text = "Generate Example";
         this.generateButton.Click += new System.EventHandler(this.generateButton_Click);
         // 
         // questionLabel
         // 
         this.questionLabel.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
         this.questionLabel.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
         this.questionLabel.Location = new System.Drawing.Point(12, 12);
         this.questionLabel.Margin = new System.Windows.Forms.Padding(3, 3, 3, 2);
         this.questionLabel.Name = "questionLabel";
         this.questionLabel.Size = new System.Drawing.Size(167, 29);
         this.questionLabel.TabIndex = 42;
         this.questionLabel.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
         // 
         // MathTutor
         // 
         this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
         this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
         this.ClientSize = new System.Drawing.Size(448, 179);
         this.Controls.Add(this.okButton);
         this.Controls.Add(this.answerTextBox);
         this.Controls.Add(this.grpOperation);
         this.Controls.Add(this.grpDifficulty);
         this.Controls.Add(this.lblEquals);
         this.Controls.Add(this.generateButton);
         this.Controls.Add(this.questionLabel);
         this.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
         this.Name = "MathTutor";
         this.Text = "Math Tutor";
         this.grpOperation.ResumeLayout(false);
         this.grpOperation.PerformLayout();
         this.grpDifficulty.ResumeLayout(false);
         this.grpDifficulty.PerformLayout();
         this.ResumeLayout(false);
         this.PerformLayout();

      }

      #endregion

      private System.Windows.Forms.Button okButton;
      private System.Windows.Forms.TextBox answerTextBox;
      private System.Windows.Forms.GroupBox grpOperation;
      private System.Windows.Forms.RadioButton multiplicationRadioButton;
      private System.Windows.Forms.RadioButton subtractionRadioButton;
      private System.Windows.Forms.RadioButton additionRadioButton;
      private System.Windows.Forms.GroupBox grpDifficulty;
      private System.Windows.Forms.RadioButton levelThreeRadioButton;
      private System.Windows.Forms.RadioButton levelTwoRadioButton;
      private System.Windows.Forms.RadioButton levelOneRadioButton;
      private System.Windows.Forms.Label lblEquals;
      private System.Windows.Forms.Button generateButton;
      private System.Windows.Forms.Label questionLabel;
   }
}

