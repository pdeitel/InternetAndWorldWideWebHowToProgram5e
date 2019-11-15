namespace WelcomeSOAPXMLClient
{
   partial class WelcomeSOAPXML
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
         this.textLabel = new System.Windows.Forms.Label();
         this.textBox = new System.Windows.Forms.TextBox();
         this.submitButton = new System.Windows.Forms.Button();
         this.SuspendLayout();
         // 
         // textLabel
         // 
         this.textLabel.AutoSize = true;
         this.textLabel.Location = new System.Drawing.Point(13, 15);
         this.textLabel.Name = "textLabel";
         this.textLabel.Size = new System.Drawing.Size(97, 15);
         this.textLabel.TabIndex = 8;
         this.textLabel.Text = "Enter your name:";
         // 
         // textBox
         // 
         this.textBox.Location = new System.Drawing.Point(116, 12);
         this.textBox.Name = "textBox";
         this.textBox.Size = new System.Drawing.Size(100, 23);
         this.textBox.TabIndex = 7;
         // 
         // submitButton
         // 
         this.submitButton.Location = new System.Drawing.Point(76, 41);
         this.submitButton.Name = "submitButton";
         this.submitButton.Size = new System.Drawing.Size(75, 23);
         this.submitButton.TabIndex = 6;
         this.submitButton.Text = "Submit";
         this.submitButton.UseVisualStyleBackColor = true;
         this.submitButton.Click += new System.EventHandler(this.submitButton_Click);
         // 
         // WelcomeSOAPXML
         // 
         this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
         this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
         this.ClientSize = new System.Drawing.Size(228, 74);
         this.Controls.Add(this.textLabel);
         this.Controls.Add(this.textBox);
         this.Controls.Add(this.submitButton);
         this.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
         this.Name = "WelcomeSOAPXML";
         this.Text = "Welcome Client";
         this.ResumeLayout(false);
         this.PerformLayout();

      }

      #endregion

      internal System.Windows.Forms.Label textLabel;
      internal System.Windows.Forms.TextBox textBox;
      internal System.Windows.Forms.Button submitButton;
   }
}

