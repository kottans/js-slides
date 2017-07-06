<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <table border="2" bgcolor="yellow">
      <tr>
        <th>Chapter</th>
        <th>Pages</th>
      </tr>
      <!-- <xsl:for-each select="table-of-contents/chapter[from-page &gt;=  '32']"> -->
      <!-- = or != or &lt; or &gt; or &gt;= or &lt;= -->
      <!-- <xsl:for-each select="table-of-contents/chapter"> -->
      <xsl:for-each select="table-of-contents/*">
        <tr>
            <!-- <xsl:value-of select ="."/>  -->
            <!-- would return content of children nodes -->
            <xsl:choose>
              <xsl:when  test="name(.)='annotation'">
                <td bgcolor='red' colspan='2' align="center">
                  <xsl:value-of select ="name(.)"/> 
                </td>
              </xsl:when>
              <xsl:otherwise>
                <td>
                  <xsl:value-of select ="name(.)"/> 
                  <xsl:if test="number">#</xsl:if>
                  <xsl:value-of select="number"/>
                </td>
                <td>
                  <xsl:value-of select="from-page"/>-<xsl:value-of select="to-page"/>
                </td>
              </xsl:otherwise>
            </xsl:choose>
        </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>